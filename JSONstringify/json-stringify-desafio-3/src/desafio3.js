import React from 'react';
import './App.css';

export default class Desafio3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        obj : {
            title: "",
            author: "",
            body: "",
            type: "article",
            url: ""
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