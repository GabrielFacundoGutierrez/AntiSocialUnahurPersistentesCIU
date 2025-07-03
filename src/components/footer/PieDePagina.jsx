const PieDePagina = () => {
  return (
    <footer className="bg-dark">
      <h2 className="titulo">Creadores de la Aplicación</h2>
      <div className="container">
        <div className="author name">
          <p>Diego Primera</p>
          <a href="https://github.com/Darconk751" target="blank">
            <img src="https://unavatar.io/github/darconk751" alt="Imagen de perfil" />
          </a>
        </div>
        <div className="author name">
          <p>Facundo Gutiérrez</p>
          <a href="GabrielFacundoGutierrez">
            <img src="https://unavatar.io/github/gabrielfacundogutierrez" alt="Imagen de perfil" />
          </a>
        </div>
        <div className="author name">
          <p>Franco Cantero</p>
          <a href="https://github.com/FrancoLuisCantero">
            <img src="https://unavatar.io/github/francoluiscantero" alt="Imagen de perfil" />
          </a>
        </div>
        <div className="author name">
          <p>Luana Calderón</p>
          <a href="https://github.com/LuanaCalderon">
            <img src="https://unavatar.io/github/luanacalderon" alt="Imagen de perfil"/>
          </a>
        </div>
      </div>
      <p className="copy">Todos los derechos reservados &copy;. 2025</p>
    </footer>
  );
};

export default PieDePagina;


