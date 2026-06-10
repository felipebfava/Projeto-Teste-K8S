
### Características
Uso de Multi-stage Build (boa prática), em containers Docker como o Dockerfile do Backend.

Importante!
O Multi-stage Build reduz a exposição de arquivos de build e ferramentas, mas o código Node continuará existindo dentro da imagem porque ele precisa ser interpretado pelo Node.js.

Uso de:
RUN npm install --omit=dev

Geralmente, o comando --omit=dev é executado com o comando de instalação padrão npm install para criar um ambiente mais enxuto, isso é, deixar a imagem mais compacta.

Em ambientes de produção: Evita o download e a instalação de pacotes usados apenas para desenvolvimento (como linters, frameworks de teste e minificadores), economizando espaço em disco e acelerando o deploy.

Na raiz do repositório execute o docker-compose deverá subir o frontend, backend e o banco postgresql. Após isso acesse as rotas:
http://localhost:3005/
http://localhost:3000/tasks
