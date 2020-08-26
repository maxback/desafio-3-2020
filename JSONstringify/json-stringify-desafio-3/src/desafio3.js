import React from 'react';
import './App.css';

export default class Desafio3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        obj : {
            title: "Deep Learning: conheça o cérebro dos carros autônomos",
            author: "Isabella Câmara",
            body: "Atualmente, os carros autônomos são alvo de muita curiosidade e, de acordo com João Paulo Navarro, arquiteto de soluções com foco em Deep Learning e computação de alto-desempenho da NVIDIA, suas vantagens falam por si só. Diferente dos humanos, o carro autônomo é capaz de pensar com mais agilidade e tomar decisões de forma rápida, enxerga de modo periférico e não enfrenta os principais obstáculos do trânsito – cansaço, distração, imprudência e consumo de álcool causam a morte de cerca de 1,25 milhão de pessoas todos os anos no mundo, de acordo com a Organização Mundial da Saúde.\n\n  Frente a esse cenário, João Paulo acredita que o carro autônomo é a resposta para resolver o problema do trânsito. Porém, antes de colocar os veículos para rodarem nas ruas, é necessário treinar a máquina com base no mais novo programa de rede neural, o deep learning, que se assemelha a um cérebro humano. A ideia dessa nova tecnologia é fazer com que o carro visualiza o mundo real e reconhece obstáculos no meio do caminho antes de tomar qualquer decisão. \"Mas não é somente ver, é entender o que está por trás daquilo para tomar decisões mais seguras. Uma imagem é composta de reflexos de luz, representados no computador em forma de número, mas, se eu quero identificar que determinado objeto é uma pessoa eu preciso extrair o sentido por trás da imagem, e o número não é o suficiente\", explica Navarro no Mobility Day 2018.\n  \n  \"Se queremos máquinas para pensar, precisamos ensiná-las a ver\", disse Fei-Fei Li, uma das principais cientistas da Universidade de Stanford – e João Paulo revela que é nesta frase que está a verdadeira essência do deep learning. Diferente de uma tecnologia de reconhecimento visual tradicional, a deep learning permite que a máquina aprenda novos objetos a partir de um treinamento, o que a faz realmente enxergar. \"Algoritmos baseados em regra não são a solução para os carros autônomos\", afirma. Para ele, \"não basta identificar itens classificados por uma forma padrão de cachorro\", por exemplo, porque no mundo real eles não estarão visíveis de uma forma padronizada, \"são infinitas combinações de cachorros que a máquina precisa reconhecer\", explica.\n  \n  Por outro lado, com a deep learning, os engenheiros não precisaram descrever todas as características de um cachorro. \"Eles passarão imagens para a máquina e ela aprenderá quais são os padrões fundamentais da imagem para, futuramente, identificá-los em outras situações de uma maneira curada\", explica. Dessa forma, os carros autônomos serão dotados de um \"cérebro\", o que os tornará capazes de discernir se será necessário diminuir a velocidade devido a um cachorro em potencial no meio da rua ou seguir seu caminho caso o animal esteja fora de sua rota.\n  Carros autônomos e deep learning no Brasil\n  \n  Atualmente, já existem diversos projetos no Brasil envolvendo a construção de carros autônomos – a maioria das iniciativas, apesar dos cortes que o governo fez em verbas para pesquisa e ciência, acontecem dentro das próprias universidades, diz Navarro. O Iara (Intelligent Autonomous Robotic Automobile) nasceu de um projeto da Universidade Federal do Espírito Santo e, hoje, é um dos primeiros veículos autônomos brasileiros a trafegar em vias urbanas e em rodovias.\n  \n  De acordo com o arquiteto da NVIDIA, apesar dos projetos brasileiros estarem se tornando realidade, ainda serão necessários de 5 a 10 anos para que um carro autônomo saia do meio acadêmico e seja implantado em larga escala no país. Um dos grandes obstáculos – e causadores dessa demora relativa -, segundo ele, é em relação às especificidades do mercado brasileiro. \"Trazer fabricantes e empresas com interesse em desenvolver carros autônomos aqui é o grande desafio. Um veículo autônomo treinado para as estradas da Califórnia, não é o ideal para o Brasil. Precisamos desenvolver a tecnologia aqui, trazendo o mercado ou gerando empresas no próprio país para montar um modelo adequado a nossa realidade\", conclui.",
            type: "article",
            url: "https://www.startse.com/noticia/startups/mobtech/deep-learning-o-cerebro-dos-carros-autonomos"
          },
          strobj: "pressione o botão Gerar..."
      };
  
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
      this.handleChangeBody = this.handleChangeBody.bind(this);
      this.handleChangeType = this.handleChangeType.bind(this);
      this.handleChangeURL = this.handleChangeURL.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.limpar = this.limpar.bind(this);
    }
  
    handleChangeTitle(event) {
      let obj = this.state.obj;
      obj.title = event.target.value;
      this.setState({obj: obj});
    }

    handleChangeAuthor(event) {
      let obj = this.state.obj;
      obj.author = event.target.value;
      this.setState({obj: obj});
    }

    handleChangeBody(event) {
      let obj = this.state.obj;
      obj.body = event.target.value;
      this.setState({obj: obj});
    }

    handleChangeType(event) {
      let obj = this.state.obj;
      obj.type = event.target.value;
      this.setState({obj: obj});
    }

    handleChangeURL(event) {
      let obj = this.state.obj;
      obj.url = event.target.value;
      this.setState({obj: obj});
    }
  
    handleSubmit(event) {
      //alert('Uma dissertação foi enviada: ' + this.state.value);
      const myObjStr = JSON.stringify(this.state.obj, null, " ");

      this.setState({strobj: myObjStr});

      event.preventDefault();
    }
  
    limpar(e) {
        this.setState({obj: {
            title: "",
            author: "",
            body: "",
            type: "article",
            url: ""
          }});
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>


<ul>
<li><input type="checkbox" id="1"></input><a href="https://www.ted.com/talks/helen_czerski_the_fascinating_physics_of_everyday_life/transcript?language=pt-br#t-81674" rel="nofollow">https://www.ted.com/talks/helen_czerski_the_fascinating_physics_of_everyday_life/transcript?language=pt-br#t-81674</a></li>
<li><input type="checkbox" id="2"></input><a href="https://www.ted.com/talks/kevin_kelly_how_ai_can_bring_on_a_second_industrial_revolution/transcript?language=pt-br" rel="nofollow">https://www.ted.com/talks/kevin_kelly_how_ai_can_bring_on_a_second_industrial_revolution/transcript?language=pt-br</a></li>
<li><input type="checkbox" id="3"></input><a href="https://www.ted.com/talks/sarah_parcak_help_discover_ancient_ruins_before_it_s_too_late/transcript?language=pt-br" rel="nofollow">https://www.ted.com/talks/sarah_parcak_help_discover_ancient_ruins_before_it_s_too_late/transcript?language=pt-br</a></li>
<li><input type="checkbox" id="4"></input><a href="https://www.ted.com/talks/sylvain_duranton_how_humans_and_ai_can_work_together_to_create_better_businesses/transcript?language=pt-br" rel="nofollow">https://www.ted.com/talks/sylvain_duranton_how_humans_and_ai_can_work_together_to_create_better_businesses/transcript?language=pt-br</a></li>
<li><input type="checkbox" id="5"></input><a href="https://www.ted.com/talks/chieko_asakawa_how_new_technology_helps_blind_people_explore_the_world/transcript?language=pt-br" rel="nofollow">https://www.ted.com/talks/chieko_asakawa_how_new_technology_helps_blind_people_explore_the_world/transcript?language=pt-br</a></li>
<li><input type="checkbox" id="6"></input><a href="https://www.ted.com/talks/pierre_barreau_how_ai_could_compose_a_personalized_soundtrack_to_your_life/transcript?language=pt-br" rel="nofollow">https://www.ted.com/talks/pierre_barreau_how_ai_could_compose_a_personalized_soundtrack_to_your_life/transcript?language=pt-br</a></li>
<li><input type="checkbox" id="7"></input><a href="https://www.ted.com/talks/tom_gruber_how_ai_can_enhance_our_memory_work_and_social_lives/transcript?language=pt-br" rel="nofollow">https://www.ted.com/talks/tom_gruber_how_ai_can_enhance_our_memory_work_and_social_lives/transcript?language=pt-br</a></li>
<li><input type="checkbox" id="8"></input><a href="https://olhardigital.com.br/colunistas/wagner_sanchez/post/o_futuro_cada_vez_mais_perto/78972" rel="nofollow">https://olhardigital.com.br/colunistas/wagner_sanchez/post/o_futuro_cada_vez_mais_perto/78972</a></li>
<li><input type="checkbox" id="9"></input><a href="https://olhardigital.com.br/colunistas/wagner_sanchez/post/os_riscos_do_machine_learning/80584" rel="nofollow">https://olhardigital.com.br/colunistas/wagner_sanchez/post/os_riscos_do_machine_learning/80584</a></li>
<li><input type="checkbox" id="10"></input><a href="https://olhardigital.com.br/ciencia-e-espaco/noticia/nova-teoria-diz-que-passado-presente-e-futuro-coexistem/97786" rel="nofollow">https://olhardigital.com.br/ciencia-e-espaco/noticia/nova-teoria-diz-que-passado-presente-e-futuro-coexistem/97786</a></li>
<li><input type="checkbox" id="11"></input><a href="https://olhardigital.com.br/noticia/inteligencia-artificial-da-ibm-consegue-prever-cancer-de-mama/87030" rel="nofollow">https://olhardigital.com.br/noticia/inteligencia-artificial-da-ibm-consegue-prever-cancer-de-mama/87030</a></li>
<li><input type="checkbox" id="12"></input><a href="https://olhardigital.com.br/ciencia-e-espaco/noticia/inteligencia-artificial-ajuda-a-nasa-a-projetar-novos-trajes-espaciais/102772" rel="nofollow">https://olhardigital.com.br/ciencia-e-espaco/noticia/inteligencia-artificial-ajuda-a-nasa-a-projetar-novos-trajes-espaciais/102772</a></li>
<li><input type="checkbox" id="13"></input><a href="https://olhardigital.com.br/colunistas/jorge_vargas_neto/post/como_a_inteligencia_artificial_pode_mudar_o_cenario_de_oferta_de_credito/78999" rel="nofollow">https://olhardigital.com.br/colunistas/jorge_vargas_neto/post/como_a_inteligencia_artificial_pode_mudar_o_cenario_de_oferta_de_credito/78999</a></li>
<li><input type="checkbox" id="14"></input><a href="https://olhardigital.com.br/ciencia-e-espaco/noticia/cientistas-criam-programa-poderoso-que-aprimora-deteccao-de-galaxias/100683" rel="nofollow">https://olhardigital.com.br/ciencia-e-espaco/noticia/cientistas-criam-programa-poderoso-que-aprimora-deteccao-de-galaxias/100683</a></li>
<li><input type="checkbox" id="15"></input><a href="https://www.startse.com/noticia/startups/mobtech/deep-learning-o-cerebro-dos-carros-autonomos" rel="nofollow">https://www.startse.com/noticia/startups/mobtech/deep-learning-o-cerebro-dos-carros-autonomos</a></li>
</ul>


            <br></br>
            <button onClick={this.limpar}>Limpar</button>
        <label>  Title:
          <input type="text" value={this.state.obj.title} onChange={this.handleChangeTitle} />
        </label>   
        <br></br>         
        <label>  Author:
          <input type="text" value={this.state.obj.author} onChange={this.handleChangeAuthor} />
        </label>            
        <br></br>         
          <label>
          Body:
            <textarea value={this.state.obj.body} onChange={this.handleChangeBody} />
          </label>
          <br></br>         

          <label>
          Type:
          <select value={this.state.obj.type} onChange={this.handleChangeType}>
            <option value="article">article</option>
            <option value="video">video</option>
          </select>
        </label>
        <br></br>         
        <label>  URL:
          <input type="text" value={this.state.obj.url} onChange={this.handleChangeURL} />
        </label>            

          <input type="submit" value="Gerar" />
          <br></br>         

          <label>
          Body:
            <textarea value={this.state.strobj} />
          </label>
          
        </form>
      );
    }
  }