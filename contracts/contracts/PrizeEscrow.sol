// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrizeEscrow {
    address public organizer;
    address public winner;
    address public judge;
    uint public prizeAmount;
    bool public prizeDeposited;
    bool public prizePaid;

    enum State { Created, Funded, WinnerApproved, Paid }
    State public currentState;

    modifier onlyOrganizer() {
        require(msg.sender == organizer, "Only organizer can call this function");
        _;
    }

    modifier onlyJudge() {
        require(msg.sender == judge, "Only judge can call this function");
        _;
    }

    modifier inState(State _state) {
        require(currentState == _state, "Invalid state");
        _;
    }

    constructor(address _judge) {
        organizer = msg.sender;
        judge = _judge;
        currentState = State.Created;
    }

    function depositPrize() public payable onlyOrganizer inState(State.Created) {
        prizeAmount = msg.value;
        prizeDeposited = true;
        currentState = State.Funded;
    }

    function approveWinner(address _winner) public onlyJudge inState(State.Funded) {
        winner = _winner;
        currentState = State.WinnerApproved;
    }

    function payoutPrize() public onlyOrganizer inState(State.WinnerApproved) {
        require(winner != address(0), "Winner has not been approved");
        payable(winner).transfer(prizeAmount);
        prizePaid = true;
        currentState = State.Paid;
    }
}