import Background from "../../components/background";
import Card from "../../components/login-card"; 

function Login() {
  return (
    <>
      <Background />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Card />
      </div>
    </>
  );
}

export default Login;
