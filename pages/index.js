import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div /*className={styles.container}*/>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="\images\recycle.jpg" style={{width: "100%", height: "50vh"}}></img>


      <main className={styles.main}>
      <h2 className="text-center my-5" data-aos="fade-up" style={{fontSize: '36px'}}>
          Services
        </h2>
        

<div
          className="row my-5 justify-content-center service"
          data-aos="fade-up"
        >

        <div className="col-md-3 mb-4 mx-3">
            <div className="card text-center">
              <img
                src="\images\terapia-card.jpg"
                className="card-img-top mb-3"
                alt="..."
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title">TERAPIA INDIVIDUAL</h4>
                  <p className="card-text">
                    Se realizan en la comodidad de tu casa, por videoconferencia
                    a través de Skype, Zoom o WhatsApp. Los resultados obtenidos
                    son tan buenos como los que se obtienen en las sesiones
                    presenciales.
                  </p>
                </div>
                <div>
                  <Link href="/individual">
                    <button
                      id={styles.headerButtonPink}
                      className="btn-success text-white"
                    >
                      Learn More
                      <i className="fas fa-play ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
       
          <div className="col-md-3 mb-4 mx-3">
            <div className="card text-center">
              <img
                src="\images\terapia-card.jpg"
                className="card-img-top mb-3"
                alt="..."
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title">TERAPIA INDIVIDUAL</h4>
                  <p className="card-text">
                    Se realizan en la comodidad de tu casa, por videoconferencia
                    a través de Skype, Zoom o WhatsApp. Los resultados obtenidos
                    son tan buenos como los que se obtienen en las sesiones
                    presenciales.
                  </p>
                </div>
                <div>
                  <Link href="/individual">
                    <button
                      id={styles.headerButtonPink}
                      className="btn-success text-white"
                    >
                      Learn More
                      <i className="fas fa-play ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 mx-3">
            <div className="card text-center">
              <img
                src="\images\terapia-card.jpg"
                className="card-img-top mb-3"
                alt="..."
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title">TERAPIA INDIVIDUAL</h4>
                  <p className="card-text">
                    Se realizan en la comodidad de tu casa, por videoconferencia
                    a través de Skype, Zoom o WhatsApp. Los resultados obtenidos
                    son tan buenos como los que se obtienen en las sesiones
                    presenciales.
                  </p>
                </div>
                <div>
                  <Link href="/individual">
                    <button
                      id={styles.headerButtonPink}
                      className="btn-success text-white"
                    >
                      Learn More
                      <i className="fas fa-play ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          </div>   
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
