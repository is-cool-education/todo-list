import React, { Component, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createTask, editTask, getTask } from "../api/tasks";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-hot-toast";
import { useParams } from "react-router";

function TaskPageForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    async function loadValues() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("is_complete", data.is_complete);
      }
    }
    loadValues();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await editTask(params.id, data);
      toast.success("Tarefa editada com sucesso!");
    } else {
      await createTask(data);
      toast.success("Tarefa criada com sucesso!");
    }
  });

  return (
    <div className="container mt-5">
      {params.id ? <h2 className="text-light text-center">Editar Task</h2> : <h2 className="text-light text-center">Criar Task</h2>}
      <form onSubmit={onSubmit} className="p-4">
        <div className="mb-4">
          <label htmlFor="title" className="form-label text-light">
            Nome da tarefa
          </label>
          <input type="text" placeholder="Nome" {...register("title", { required: true })} className="form-control" />
          {errors.title && <span>Esse campo é obrigatório</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="description" className="form-label text-light">
            Descrição
          </label>
          <textarea
            name="description"
            rows={8}
            id="description"
            placeholder="Descrição da tarefa"
            {...register("description")}
            className="form-control"></textarea>
        </div>
        <div className="mb-5">
          <input type="checkbox" id="is_complete" name="is_complete" {...register("is_complete")} className="form-check-input me-3" />
          <label htmlFor="is_complete" className="form-check-label text-light">
            Tarefa cumprida
          </label>
        </div>
        {currentUser && <input type="text" name="user" value={currentUser.id} hidden {...register("user")} />}
        <input type="submit" value="Salvar" className="btn btn-custom fw-bold" />
      </form>
    </div>
  );
}

export default TaskPageForm;
