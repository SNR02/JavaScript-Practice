import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { name: "", email: "", password: "" };
    default:
      return state;
  }
};

const SignupForm = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <input
        type="text"
        value={formState.name}
        onChange={(e) =>
          dispatch({ type: "CHANGE_FIELD", field: "name", value: e.target.value })
        }
      />
      <input
        type="email"
        value={formState.email}
        onChange={(e) =>
          dispatch({ type: "CHANGE_FIELD", field: "email", value: e.target.value })
        }
      />
      <input
        type="password"
        value={formState.password}
        onChange={(e) =>
          dispatch({ type: "CHANGE_FIELD", field: "password", value: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};
