import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Conteiner, Form, SubmitButton } from './styles';

function Main() {
  return (
    <Conteiner>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />
        <SubmitButton>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Conteiner>
  );
}

export default Main;