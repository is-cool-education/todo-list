import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks";

function TaskPageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await createTask(data);
  });

  return (
    <div>
      <h1>Criar Task</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Nome da tarefa</label>
          <input type="text" placeholder="Nome" {...register("title", { required: true })} />
          {errors.title && <span>Esse campo é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <textarea name="description" rows={8} id="description" placeholder="Descrição da tarefa" {...register("description")}></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default TaskPageForm;
