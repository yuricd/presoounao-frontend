import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './Main.scss';
import PoliticianCard from '../PoliticianCard/PoliticianCard';
import { Message } from '../Message/Message';
import SelectOption from '../SelectOption/SelectOption';
import PoliticianInfo from '../PoliticianInfo/PoliticianInfo';
import { Score } from '../Score/Score';
import { Intro } from '../Intro/Intro';

export default class Main extends React.Component {

  state = {
    showIntro: true,
    score: 0,
    idList: [],
    total: 0,
    answered: false,
    correct: null,
    politician: {},
    showDetails: false,
    showScore: false,
    isLoading: true
  }

  shuffle = (arr) => {
    let ctr = arr.length;
    let temp;
    let index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
  }

  async componentDidMount() {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/politicians/?getIds=true`);
    const ids = res.data.map(item => item._id);
    const idList = this.shuffle(ids);
    this.setState({total: idList.length});
    this.loadPolitician(idList.pop());
    this.setState({ idList, isLoading: false });
  }

  handleRestart = () => {
    window.location.reload();
  }

  handleShowIntro = () => {
    this.setState({showIntro: false})
  }

  handleSelectOption = (arrestedOption) => {
    const isArrested = this.state.politician.arrestment.isArrested;

    this.setState({
      answered: true,
      correct: arrestedOption === isArrested
    })

    if (arrestedOption === isArrested) {
      this.setState( prevState => ({
        score: prevState.score + 1
      }));
    }
  }

  handleShowDetails = () => {
    this.setState({
      showDetails: true
    })
  }

  handleNext = () => {
    this.setState({
      showDetails: false,
      answered: false,
      isLoading: true,
    })
    this.loadNext();
  }

  loadNext = async () => {
    const { idList } = this.state;
    const nextId = idList.pop();
    (nextId !== undefined) 
      ? this.loadPolitician(nextId)
      : this.setState({ showScore: true, isLoading: false });
  }

  loadPolitician = async (id) => { 
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/politicians/${id}`);
    const politician = res.data;
    this.setState({ politician, isLoading: false });
  }

  showMessage = (correct) => {
    return (correct) ? <Message 
                          correct={true} 
                          handleShowDetails={this.handleShowDetails}
                          handleNext={this.handleNext}
                        >
                          Você acertou
                        </Message> 
                     : <Message 
                          correct={false} 
                          handleShowDetails={this.handleShowDetails}
                          handleNext={this.handleNext}
                        >
                          Você errou
                        </Message>
  }

  render() {
    const { politician, score, answered, correct, showDetails, showScore, total, showIntro, isLoading } = this.state;

    const ChooseOption = () => {
      return (
          <div className="content">
            <PoliticianCard
              score={score}
              name={politician.name}
              position={politician.position} 
              picture={politician.picture}
              loading={isLoading}
            />
            
            {(answered) ? (
              this.showMessage(correct)
              ) : (
                <SelectOption loading={isLoading} isArrested={this.handleSelectOption} />
            )}
          </div>
      )
    }

    return (
      <div className="main">
        <div className="background">
          <div className={`black ${(showDetails) ? 'w30' : ''}`} />
        </div>

        <Header />

        {(!showDetails) ? (
          <ChooseOption />
        ) : (
          <PoliticianInfo
            id={politician._id}
            name={politician.name}
            position={politician.position}
            arrestment={politician.arrestment}
            details={politician.details}
            picture={politician.picture}
            references={politician.references}
            handleNext={this.handleNext}
          />
        )}

        {(showIntro) && <Intro handleShowIntro={this.handleShowIntro} />}
        {(showScore) && <Score score={score} total={total} handleRestart={this.handleRestart} />}
      </div>
    )
  }
}