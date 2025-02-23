# My Books

[] - Criar Livro
[] - Atualizar Livro
[] - Deletar Livro
[] - Ler Livro
[] - Conectar com postgres
[] - Transformar em container

# Dados do Livro

Nome
Autor
avaliação

docker run --name postgres \
  -e POSTGRES_USER=me \
  -e POSTGRES_PASSWORD=senha123 \
  -e POSTGRES_DB=api \
  -v /home/mvthexz/dev/repos/crud/scripts:/docker-entrypoint-initdb.d \
  -p 5432:5432 \
  -d postgres

docker run --name postgres \
  -v /home/mvthexz/dev/repos/crud/init.sql:/docker-entrypoint-initdb.d \
  -d postgres

curl -X POST http://localhost:3000/book \
  -H "Content-Type: application/json" \
  -d '{"name": "Livro Exemplo", "author": "Autor Exemplo", "description": "Descrição do livro"}'

