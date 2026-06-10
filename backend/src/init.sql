CREATE TABLE IF NOT EXISTS tasks(
    
    id SERIAL PRIMARY KEY,

    task TEXT NOT NULL
);

INSERT INTO tasks(task)
VALUES
('Fazer o Projeto de Infraestrutura e Serviços Web'),
('Estudar Kubernetes');