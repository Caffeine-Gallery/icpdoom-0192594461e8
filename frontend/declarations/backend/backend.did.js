export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCounter' : IDL.Func([], [IDL.Nat], ['query']),
    'incrementCounter' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
