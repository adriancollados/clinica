// Centraliza el acceso a variables de entorno para uso en cliente y servidor.
// Nota: En Next.js, para que sean accesibles en el cliente deben llevar prefijo NEXT_PUBLIC_.

export type AppConsts = {
  EMAIL_CLINICA: string;
  TELEFONO_CLINICA: string;
};

function env(name: string, fallback = ""): string {
  const value = process.env[name];
  return value === undefined ? fallback : value;
}

// Intenta primero con variables públicas (cliente) y luego privadas (servidor) como respaldo.
function getEnv(keyBase: string, fallback = ""): string {
  return env(`NEXT_PUBLIC_${keyBase}`, env(keyBase, fallback));
}

export const Consts: AppConsts = {
  EMAIL_CLINICA: getEnv("EMAIL_CLINICA"),
  TELEFONO_CLINICA : getEnv("TELEFONO_CLINICA")
};

// Exporta también constantes individuales por comodidad
export const {
  EMAIL_CLINICA,
  TELEFONO_CLINICA
} = Consts;


