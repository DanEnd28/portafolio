// Iconos para las redes/enlaces definidos en SOCIALS (content.js).
// Para agregar un nuevo tipo de red: importa su icono y añádelo al mapa.
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGlobe,
} from 'react-icons/fa6'
import { SiUpwork, SiWhatsapp, SiTelegram } from 'react-icons/si'

const MAP = {
  email: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
  upwork: SiUpwork,
  whatsapp: SiWhatsapp,
  telegram: SiTelegram,
  instagram: FaInstagram,
  x: FaXTwitter,
  youtube: FaYoutube,
  website: FaGlobe,
}

// Devuelve el componente de icono para una clave; usa el globo como respaldo.
export function socialIcon(key) {
  return MAP[key] || FaGlobe
}
