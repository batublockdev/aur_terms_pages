const express = require("express");

const app = express();
const PORT = 3000;

// Route that returns HTML
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Política de Privacidad - AUR</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f9fafb;
      color: #111827;
    }
    .container {
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }
    h1, h2 {
      color: #111827;
    }
    h1 {
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      margin: 10px 0;
    }
    ul {
      margin: 10px 0 10px 20px;
    }
    .date {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Política de Privacidad</h1>
    <p class="date">Última actualización: 23/03/2026</p>
    <p>
Bienvenido a AUR.

Tu privacidad es importante para nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestra aplicación.    </p>
    <h2>1. Naturaleza del servicio</h2>
    <p>
      AUR es una herramienta de firma criptográfica que permite a los usuarios autorizar transacciones digitales.
    </p>
    <p><strong>AUR NO es una billetera, no custodia fondos y no tiene acceso a los activos de los usuarios.</strong></p>
    <p>
      Las claves privadas se generan y permanecen en el dispositivo del usuario en todo momento.
    </p>

    <h2>2. Información que recopilamos</h2>
    <p>Podemos recopilar la siguiente información:</p>
    <ul>
      <li>Número de teléfono (para identificación dentro de la app)</li>
      <li>Datos básicos de uso</li>
      <li>Información técnica del dispositivo</li>
    </ul>
    <p><strong>No recopilamos:</strong></p>
    <ul>
      <li>Claves privadas</li>
      <li>Frases semilla</li>
      <li>Fondos o balances</li>
      <li>Información financiera sensible</li>
    </ul>

    <h2>3. Uso de la información</h2>
    <ul>
      <li>Permitir el funcionamiento de la aplicación</li>
      <li>Identificar usuarios dentro de grupos</li>
      <li>Mejorar la experiencia y rendimiento</li>
      <li>Prevenir fraudes</li>
    </ul>

    <h2>4. Almacenamiento de claves</h2>
    <p>
      Las claves privadas se almacenan únicamente en el dispositivo del usuario y no se transmiten a nuestros servidores.
    </p>
    <p>
      Se utilizan mecanismos seguros como Keychain (iOS) y Keystore (Android).
    </p>

    <h2>5. Compartición de información</h2>
    <p>
      No vendemos ni compartimos información personal con terceros, excepto cuando sea requerido por ley o para proteger la seguridad del sistema.
    </p>

    <h2>6. Seguridad</h2>
    <p>
      Implementamos medidas razonables para proteger la información del usuario. El usuario es responsable de mantener su dispositivo seguro.
    </p>

    <h2>7. Responsabilidad del usuario</h2>
    <p>
      El usuario es el único responsable de sus claves privadas. La pérdida del acceso al dispositivo puede implicar pérdida de acceso a sus autorizaciones
    </p>

    <h2>8. Cambios en esta política</h2>
    <p>
      Podemos actualizar esta política en cualquier momento. Notificaremos cambios a través de la app o canales oficiales.
    </p>

    <h2>9. Contacto</h2>
    <p>
      Si tienes preguntas, contáctanos en:
    </p>
    <p><strong>batublockchain@gmail.com</strong></p>
  </div>
</body>
</html>
  `);
});
app.get("/remove-account", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Eliminar cuenta</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #ffffff;
      color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      width: 320px;
      text-align: center;
    }

    h2 {
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #000;
      border-radius: 6px;
      margin-bottom: 15px;
      font-size: 14px;
    }

    button {
      width: 100%;
      padding: 10px;
      border: 1px solid #000;
      background: #000;
      color: #fff;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
    }

    button:hover {
      background: #333;
    }

    #mensaje {
      margin-top: 15px;
      font-size: 13px;
    }
  </style>
</head>

<body>

  <div class="container">
    <h2>Eliminar cuenta</h2>

    <p>Ingresa tu número de WhatsApp</p>

    <input type="text" id="phone" placeholder="+573001234567" />

    <button onclick="enviar()">Eliminar mi cuenta</button>

    <p id="mensaje"></p>
  </div>

  <script>
    async function enviar() {
      const phone = document.getElementById("phone").value;
      const mensaje = document.getElementById("mensaje");

      if (!phone) {
        mensaje.innerText = "Por favor ingresa tu número.";
        return;
      }

      try {
        await fetch("/delete-request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ phone })
        });

        mensaje.innerText =
          "Solicitud enviada. Por favor confirma en WhatsApp para eliminar tu cuenta.";
      } catch (error) {
        mensaje.innerText = "Error al enviar la solicitud.";
      }
    }
  </script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});