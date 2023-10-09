const imgData = ["","caneta.jpg","iogurte.jfif","perfume.png","agua.jfif"] //imgData[i]

//caneta
const quizData1 = [
    {
        question: "Qual é o principal componente de uma caneta?",
        options: ["Tinta e Plástico", "Metal e Borracha", "Tinta e Madeira", "Tinta e borracha"],
        answer: "Tinta e Plástico"
    },
    {
        question: "Qual processo é usado para produzir a tinta usada em canetas?",
        options: ["Polietileno", "PVC", "Polipropileno", "Poliestireno"],
        answer: "Polipropileno"
    },
    {
        question: "Qual é a função da mola na ponta de uma caneta esferográfica?",
        options: ["Controlar o fluxo de tinta", "Aumentar a resistência da caneta", "Prevenir vazamentos de tinta", "Fixar a tampa"],
        answer: "Controlar o fluxo de tinta"
    },
    {
        question: "O que é necessário para que a tinta de uma caneta seja permanentemente visível em papel?",
        options: ["Alta temperatura", "Pressão atmosférica", "Pigmentos coloridos", "Radiação ultravioleta"],
        answer: "Pigmentos coloridos"
    },
    {
        question: "Qual é o nome da técnica usada para imprimir informações nas canetas, como o nome da marca?",
        options: ["Serigrafia", "Litografia", "Gravação a laser", "Impressão 3D"],
        answer: "Serigrafia"
    },
    {
        question: "Qual é o principal processo químico envolvido na produção de tintas para canetas?",
        options: ["Fusão", "Sublimação", "Oxidação", "Redução"],
        answer: "Oxidação"
    }
];

//iogurte
const quizData2 = [
    {
        question: "Qual é o ingrediente principal na produção de iogurte?",
        options: ["Leite", "Água", "Açúcar", "Farinha"],
        answer: "Leite"
    },
    {
        question: "Qual é o agente responsável pela fermentação do leite durante a produção de iogurte?",
        options: ["Leveduras", "Bactérias", "Enzimas", "Fermento"],
        answer: "Bactérias"
    },
    {
        question: "Qual é o nome das bactérias probióticas comumente usadas na produção de iogurte?",
        options: ["Lactobacillus e Streptococcus", "E. coli e Salmonella", "Penicillium e Aspergillus", "Staphylococcus e Bacillus"],
        answer: "Lactobacillus e Streptococcus"
    },
    {
        question: "Qual é o processo pelo qual o leite é aquecido antes de ser inoculado com bactérias na produção de iogurte?",
        options: ["Pasteurização", "Esterilização", "Filtração", "Liofilização"],
        answer: "Pasteurização"
    },
    {
        question: "Qual é o sabor natural do iogurte antes da adição de aromatizantes ou frutas?",
        options: ["Baunilha", "Morango", "Ácido", "Doce"],
        answer: "Ácido"
    },
    {
        question: "Qual é o papel das bactérias na produção de iogurte?",
        options: ["Produzir açúcar", "Coagular a proteína do leite", "Adicionar sabor ao iogurte", "Tornar o iogurte líquido"],
        answer: "Coagular a proteína do leite"
    }
];

const quizData3 = [
    {
        question: "Qual é a matéria-prima principal na produção de perfumes?",
        options: ["Água", "Álcool", "Óleos essenciais", "Açúcar"],
        answer: "Óleos essenciais"
    },
    {
        question: "Qual é o termo usado para descrever o processo de misturar diferentes ingredientes para criar uma fragrância única?",
        options: ["Destilação", "Perfumaria", "Alquimia", "Composição"],
        answer: "Perfumaria"
    },
    {
        question: "Qual é a parte da planta frequentemente usada na extração de óleos essenciais para perfumes?",
        options: ["Raízes", "Folhas", "Flores", "Sementes"],
        answer: "Flores"
    },
    {
        question: "Que método é comumente usado para extrair óleos essenciais das plantas?",
        options: ["Destilação a vapor", "Cozimento", "Esmagamento", "Fermentação"],
        answer: "Destilação a vapor"
    },
    {
        question: "Qual é o termo usado para a mistura de álcool e água que serve como veículo para os óleos essenciais em um perfume?",
        options: ["Solvente", "Diluente", "Fixador", "Base"],
        answer: "Base"
    },
    {
        question: "Qual é a função dos fixadores em um perfume?",
        options: ["Tornar a fragrância mais volátil", "Prolongar a durabilidade da fragrância", "Dar cor ao perfume", "Tornar a fragrância mais doce"],
        answer: "Prolongar a durabilidade da fragrância"
    }
];

//agua
const quizData4 = [
    {
        question: "Qual é o processo principal usado na produção de água potável a partir de água bruta?",
        options: ["Destilação", "Filtragem", "Ebulição", "Irrigação"],
        answer: "Filtragem"
    },
    {
        question: "Qual é o composto químico que é adicionado à água para desinfetá-la e matar microrganismos patogênicos?",
        options: ["Cloro", "Ácido sulfúrico", "Hidrogênio", "Óxido de ferro"],
        answer: "Cloro"
    },
    {
        question: "Que método é frequentemente usado para remover sais dissolvidos da água para torná-la adequada para consumo humano?",
        options: ["Destilação", "Osmose inversa", "Floculação", "Decantação"],
        answer: "Osmose inversa"
    },
    {
        question: "Qual é o processo de aquecimento da água para remover impurezas e matar microrganismos?",
        options: ["Ebulição", "Filtração", "Evaporação", "Irrigação"],
        answer: "Ebulição"
    },
    {
        question: "Qual é o termo usado para a etapa em que partículas sólidas em suspensão na água se aglutinam para facilitar sua remoção?",
        options: ["Sedimentação", "Floculação", "Desinfecção", "Destilação"],
        answer: "Floculação"
    },
    {
        question: "Qual é o processo de aquecimento da água até que ela evapore, deixando para trás impurezas?",
        options: ["Destilação", "Filtração", "Ebulição", "Osmose inversa"],
        answer: "Destilação"
    }
];
