import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export const Header = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <header>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 91 48">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 4h24c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12l-8 8V8c0-2.2 1.8-4 4-4zm11.16 4.012l.054-.006c.195-.018 1.745.008 1.97.03.916.104 1.732.275 2.5.524 4.349 1.403 7.556 5.189 8.208 9.695.096.659.108.854.108 1.747 0 .894-.012 1.089-.108 1.748a11.945 11.945 0 01-2.825 6.134 12.316 12.316 0 01-2.465 2.163l-.096.063-1.9-2.878c-1.047-1.584-3.177-4.809-4.735-7.171a449.965 449.965 0 00-2.895-4.36c-.124-.137-.204-.155-.683-.155-.406 0-.443.004-.54.051a.644.644 0 00-.173.143l-.073.092-.007 4.705-.004 4.703.049.106a.438.438 0 00.157.171l.108.068h.406c.354 0 .42-.007.495-.044a.426.426 0 00.206-.214c.042-.08.045-.216.052-3.596.005-1.93.014-3.511.023-3.509.01 0 1.098 1.6 2.421 3.556l2.405 3.559 1.92 2.591a230.045 230.045 0 001.954 2.62c.028.024-.012.052-.219.158-1.346.687-2.712 1.086-4.323 1.264-.364.04-1.936.04-2.3 0a12.695 12.695 0 01-2.533-.525c-4.35-1.403-7.557-5.189-8.21-9.695-.095-.66-.107-.854-.107-1.748 0-.893.012-1.088.108-1.747a11.877 11.877 0 012.118-5.243c2.023-2.826 5.216-4.665 8.624-4.973l.31-.027zm5.204 7.529a.473.473 0 00-.237-.277c-.078-.042-.139-.047-.486-.047-.368 0-.403.005-.5.054a.478.478 0 00-.232.296c-.014.054-.023 1.168-.023 3.15v3.066l.746 1.14.743 1.14.007-4.218c.005-2.939 0-4.243-.018-4.304z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M42.504 29h-2.25V11.937h2.25V29zM53.191 29h-2.18V14.55l-4.37 1.606v-1.968l6.21-2.333h.34V29zM69.89 16.39c0 .852-.226 1.61-.68 2.274-.444.664-1.05 1.184-1.816 1.559.891.383 1.594.941 2.11 1.675.523.735.785 1.567.785 2.497 0 1.476-.5 2.652-1.5 3.527-.992.875-2.3 1.312-3.926 1.312-1.64 0-2.957-.437-3.949-1.312-.984-.883-1.477-2.059-1.477-3.527 0-.922.25-1.754.75-2.497.508-.742 1.208-1.304 2.098-1.687a4.47 4.47 0 01-1.793-1.559c-.437-.664-.656-1.418-.656-2.261 0-1.438.46-2.578 1.383-3.422.922-.844 2.136-1.266 3.644-1.266 1.5 0 2.711.422 3.633 1.266.93.844 1.395 1.984 1.395 3.422zm-1.769 7.958c0-.953-.305-1.73-.914-2.332-.601-.602-1.39-.903-2.367-.903-.977 0-1.762.297-2.356.89-.586.595-.879 1.376-.879 2.345 0 .968.286 1.73.856 2.285.578.555 1.379.832 2.402.832 1.016 0 1.813-.277 2.39-.832.579-.563.868-1.324.868-2.285zm-3.258-10.864c-.851 0-1.543.266-2.074.797-.523.524-.785 1.239-.785 2.145 0 .867.258 1.57.773 2.11.524.53 1.22.796 2.086.796.868 0 1.559-.266 2.075-.797.523-.539.785-1.242.785-2.11 0-.866-.27-1.573-.809-2.12-.539-.547-1.223-.82-2.05-.82zM86.695 29h-2.261l-8.59-13.148V29h-2.262V11.937h2.262l8.613 13.208V11.938h2.238V29z"
          />
        </svg>
      </div>
      <div>
        <Link href={router.pathname} locale={'en'} passHref>
          <a>
            <button
              data-id="en-button"
              className={router.locale === 'en' ? 'active' : undefined}
            >
              {t('english')}
            </button>
          </a>
        </Link>
        <Link href={router.pathname} locale={'pt'} passHref>
          <a>
            <button
              data-id="pt-button"
              className={router.locale === 'pt' ? 'active' : undefined}
            >
              {t('portuguese')}
            </button>
          </a>
        </Link>
        <Link href={router.pathname} locale={'es'} passHref>
          <a>
            <button
              data-id="es-button"
              className={router.locale === 'es' ? 'active' : undefined}
            >
              {t('spanish')}
            </button>
          </a>
        </Link>
      </div>
    </header>
  )
}