import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    trigger('myAwesomeAnimation', [
      state("init", style({
        transform: 'scale(1.0)',
      })),
      state('draw', style({
        transform: 'scale(1.6)'
      })),
      state('playing', style({
        transform: 'scale(1.0)',
      })),
      state('winner', style({
        transform: 'scale(1.5)',
      })),
      transition('playing => winner', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
    ]),
  ]
})
export class BoardComponent implements OnInit {
  state = "init"
  opponent = 'Player'
  squares = Array(9).fill(null);
  player = 'X';
  winner = null;

  constructor() { }

  ngOnInit() {
    this.initGame();
  }

  get gameStatusMessage(){
    if(this.state == 'draw') {
      return `Draw`;
    }
    return this.winner? `Player ${this.winner} has won!` : `Player ${this.player}'s turn`;
  }

  handleMove(position) {
    if(!this.winner && !this.squares[position] ){
      this.squares[position] = this.player;
      if(this.winnigMove()) {
        this.winner = this.player;
        this.state = "winner";
        return;
      }
      this.nextPlayer();
    }

    if(this.outOfMoves()) {
      this.state = 'draw';
      return;
    }

    if(this.opponent == 'Computer') {
      this.squares[2] = this.player;
      if(this.winnigMove()) {
        this.winner = this.player;
        this.state = "winner";
      }
      this.nextPlayer();
    }
  }

  outOfMoves() {
    return this.squares.every((el, index, arr) => {
      return el != null;
    })
  }

  winnigMove() {
    const conditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colums
      [0, 4, 8], [2, 4, 6]             // diagonal
    ];
    for (let condition of conditions) {
      if ( this.squares[condition[0]]
        && this.squares[condition[0]] === this.squares[condition[1]]
        && this.squares[condition[1]] === this.squares[condition[2]]) {
        return true;
      }
    }
    return false;
  }

  restartGame() {
    this.initGame()
  }

  nextPlayer() {
    this.player = this.player === 'X' ? 'O' : 'X';
  }

  initGame() {
    this.squares = Array(9).fill(null);
    this.player = 'X';
    this.winner = null;
    this.state = 'playing'
  }

  changeOpponent() {
    this.opponent = (this.opponent == 'Computer' ? 'Player' : 'Computer');
    this.initGame();
  }

}
