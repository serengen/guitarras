import imagen from '../../public/img/nosotros.jpg'

function Nosotros() {

  return (
    <main className="contenedor nosotros">
        <h2 className="heading"> Nosotros</h2>
        <div className="contenido">
            <img src={imagen} alt="imagen sobre nosotros" />
            <div >
                <p>dsfdsfas dsaf dsa fds fds afsd fds af dsdsaafdsa dsa fdsaf dsaf dsaf ds fds fds fsa fd
                    afdsafdsf dasf dsa fads fdsa fds fd asf dsaf dsf sda fds fdsafdsfdasfd safdsafds afdsafdsa
                    sdf sdafdsaf dsafas fdsfdsafdsa ffdsfdsf dsafdsa fdsafdsa dfasdfdasf sadfds fdasf 
                    sfadsfsaf dsafdsaf dsafadsf dasfadsf dsafadsfa fdasfdasf dsafasdfadsfds afdsfdsf
                </p>
                <p>dsfdsfas dsaf dsa fds fds afsd fds af dsdsaafdsa dsa fdsaf dsaf dsaf ds fds fds fsa fd
                    afdsafdsf dasf dsa fads fdsa fds fd asf dsaf dsf sda fds fdsafdsfdasfd safdsafds afdsafdsa
                    sdf sdafdsaf dsafas fdsfdsafdsa ffdsfdsf dsafdsa fdsafdsa dfasdfdasf sadfds fdasf 
                    sfadsfsaf dsafdsaf dsafadsf dasfadsf dsafadsfa fdasfdasf dsafasdfadsfds afdsfdsf
                </p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros