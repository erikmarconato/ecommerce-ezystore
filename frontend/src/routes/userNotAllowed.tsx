import Header from "../components/Header/header";

function UserNotAllowed (){
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center'
          }}>
          <Header />
          <h1>Usuário não permitido!</h1>
        </div>
        
        
        
    )
}

export default UserNotAllowed;