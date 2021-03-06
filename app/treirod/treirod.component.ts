import {Component, OnInit} from '@angular/core';
import {CellComponent} from './cell/cell.component';
import {MatrixService, IRow, ICell, State, GameState} from './matrix.service';
import {StrategyService} from './strategy.service';

@Component({
	moduleId: module.id,
  selector: 'tre-dashboard',
  templateUrl: '/app/treirod/treirod.component.html',
    styleUrls: ['treirod.component.css'],
  directives: [CellComponent],
  providers: [MatrixService, StrategyService]
})


export class TreIRodComponent implements OnInit{
  title = 'Tre i Rod game';
  public rows: IRow[] = [];
  public youAreX: boolean;
  public yourTurn: boolean;
  public won: boolean;
  public computerWon: boolean;
  public draw: boolean;
  public slowComputer: boolean = true;
  private execComputerMove: () => void;

  public get easyMode(): boolean { return this.strategy && this.strategy.easyMode; }

  public set easyMode(easy: boolean) { this.strategy.easyMode = easy; }

  constructor(private matrix: MatrixService, private strategy: StrategyService) {
    this.rows = matrix.rows;
    this.youAreX = matrix.computerTurn === GameState.OTurn;
  }

  ngOnInit(): void {
    if (this.slowComputer) {
      this.execComputerMove = () =>
          setTimeout(() => this.computerMove(), Math.random() * 5000 + 500);
    } else {
      this.execComputerMove = () => this.computerMove();
    }
    this.updateStats();
  }

  private updateStats(): void {
    this.yourTurn = this.matrix.gameState !== GameState.Won &&
                    this.matrix.gameState !== GameState.Draw &&
                    this.matrix.gameState !== this.matrix.computerTurn;
    this.won = this.matrix.gameState === GameState.Won;
    this.computerWon = this.matrix.computerWon;
    this.draw = this.matrix.gameState === GameState.Draw;
    if (!this.yourTurn) {
      this.execComputerMove();
    }
  }

  public stateChange(cell: ICell) {
    cell.state = this.matrix.gameState === GameState.XTurn ? State.X : State.O;
    this.matrix.advanceBoardState();
    this.updateStats();
  }

  private computerMove(): void {
    if (this.yourTurn || this.won || this.draw) {
      return;
    }
    this.strategy.executeStrategy(this.matrix.winLines,
                                  this.matrix.computerTurn === GameState.XTurn ? State.X : State.O);
    this.matrix.advanceBoardState();
    this.updateStats();
  }

  public reset() {
    this.matrix.reset();
    this.youAreX = this.matrix.computerTurn === GameState.OTurn;
    this.updateStats();
  }

}