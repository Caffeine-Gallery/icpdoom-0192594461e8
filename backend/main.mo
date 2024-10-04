import Nat "mo:base/Nat";

actor {
  stable var counter : Nat = 0;

  public func incrementCounter() : async Nat {
    counter += 1;
    return counter;
  };

  public query func getCounter() : async Nat {
    return counter;
  };
}
