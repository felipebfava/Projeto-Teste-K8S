
### Características
Uso de Multi-stage Build (boa prática), em containers Docker como o Dockerfile do Backend.

Importante!
O Multi-stage Build reduz a exposição de arquivos de build e ferramentas, mas o código Node continuará existindo dentro da imagem porque ele precisa ser interpretado pelo Node.js.

Uso de:
RUN npm install --omit=dev

Geralmente, o comando --omit=dev é executado com o comando de instalação padrão npm install para criar um ambiente mais enxuto, isso é, deixar a imagem mais compacta.

Em ambientes de produção: Evita o download e a instalação de pacotes usados apenas para desenvolvimento (como linters, frameworks de teste e minificadores), economizando espaço em disco e acelerando o deploy.

No arquivo k8s/secrets.yaml temos as senhas codificadas em Base64

No arquivo k8s/db-pv temos o uso da política persistentVolumeReclaimPolicy: Retain. Onde, quando for excluído um PersistentVolumeClaim (PVC), o armazenamento dele não será apagado.


### Como Executar
Existem 2 maneiras de se executar, usar as imagens localmente (Tipo 1) ou buscar as imagens no docker hub (Tipo 2).

#### Tipo 01
Na pasta k8s, nos arquivos backend-deployment.yaml e frontend-deployment.yaml

Deixe o nome da imagem do container como:

Para o backend:

```js
image: projetok8s-backend:1.0
```
Para o frontend:

```js
image: projetok8s-frontend:1.0
```

E deixe a política de pull como:
```js
imagePullPolicy: Never
```

Agora, faça a execução padrão da imagem normalmente

#### Tipo 02
Na pasta k8s, nos arquivos backend-deployment.yaml e frontend-deployment.yaml

Deixe o nome da imagem do container como:

Para o Backend:
```js
image: felipefavarin/projetok8s-backend:1.0
```

Para o Frontend:
```js
image: felipefavarin/projetok8s-frontend:1.0
```

E deixe comentado (exclua) a linha:

```js
imagePullPolicy: Never
```

Ou ainda, deixe como:

```js
imagePullPolicy: Always
```

Agora, faça a execução padrão da imagem normalmente

### Execução Padrão
Na raiz do repositório:
```js
projetok8s/
```

Faça os seguintes comandos para procurar e executar as imagens:

Para o Backend:
```js
docker build -t projetok8s-backend:1.0 ./backend
```

Para o Frontend:
```js
docker build -t projetok8s-frontend:1.0 ./frontend
```

Como iremos usar o Minikube para o ambiente Kubernetes, usaremos os seguintes comandos:

Para o Backend:
```js
minikube image load projetok8s-backend:1.0
```

Para o Frontend:
```js
minikube image load projetok8s-frontend:1.0
```


docker-compose deverá subir o frontend, backend e o banco postgresql. Após isso acesse as rotas:
http://localhost:3005/
http://localhost:3000/tasks

