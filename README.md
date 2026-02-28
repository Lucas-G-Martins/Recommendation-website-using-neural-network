🚀 Engenharia de IA - Projeto Científico
Este projeto foi desenvolvido como parte do curso de Engenharia de IA, com foco em Sistemas de Recomendação de Alta Performance e maximização do aprendizado de máquina diretamente no navegador.

🧠 Diferenciais Técnicos & Foco Científico
Diferente de sistemas tradicionais que processam dados no servidor, este projeto explora o limite do Client-Side Intelligence:

Inferência Local com TensorFlow.js: O modelo de recomendação (Rede Neural) é carregado e executado inteiramente no navegador do usuário, garantindo privacidade e baixa latência.

Processamento em Multithreading (Web Workers): Para evitar o congelamento da UI (User Interface) durante o treinamento e a inferência de modelos pesados, utilizamos Web Workers. Isso permite que o cálculo pesado rode em uma thread separada, maximizando a eficiência da CPU.

Maximização do Aprendizado (Feedback Loop): O sistema foi desenhado para aprender em tempo real. Cada clique e compra alimenta o buffer de dados do usuário, permitindo o re-treinamento local para recomendações hiper-personalizadas.

🛠️ Tecnologias de IA Utilizadas
TensorFlow.js: Modelagem de redes neurais densas para filtragem colaborativa.

Web Workers API: Orquestração de threads para evitar bloqueio da Main Thread.

SessionStorage Persistent State: Simulação de estados de treinamento entre sessões.

💡 Como o ML Funciona aqui?
Entrada (Input): O sistema lê o histórico de compras (purchases) e o perfil (age, location) do JSON de usuários.

Processamento: Um Worker isolado normaliza esses dados (One-Hot Encoding para cores e categorias).

Saída (Output): O modelo sugere os produtos com maior probabilidade de conversão baseados nos pesos ajustados durante a sessão.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Estrutura do Projeto
index.html - Arquivo principal da aplicação.

index.js - Ponto de entrada (Entry point) que orquestra os módulos.

view/ - Gerenciamento do DOM e templates dinâmicos.

controller/ - Controladores que conectam as visualizações (views) aos serviços de dados.

service/ - Lógica de negócio e manipulação do dataset.

data/ - Arquivos JSON contendo o dataset de produtos e usuários (extraído do Online Retail Transaction Data).

Configuração e Execução
Instale as dependências:

Bash
npm install
Inicie a aplicação:

Bash
npm start
Acesse no navegador: http://localhost:8080

 Funcionalidades Atuais
Seleção de Perfil: Escolha de usuários com diferentes perfis demográficos (idade, localização).

Histórico de Compras: Visualização de dados reais de transações passadas.

Listagem de Itens: Vitrine de produtos com funcionalidade "Comprar Agora".

Rastreamento de Sessão: Monitoramento de comportamento de compra usando sessionStorage.

Implementações Futuras (Roadmap Científico)
Motor de Recomendação TF.js: Implementação de filtragem colaborativa e baseada em conteúdo.

Análise de Similaridade: Cálculo de distância entre vetores de usuários para recomendações personalizadas.

Pipeline de Treinamento em Background: Uso de Web Workers para atualizar os pesos da rede neural em tempo real conforme o usuário navega.
