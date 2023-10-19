import {
  buttonWrapper,
  hasIcon,
  invertedWrapper,
  link,
  loaderWrapper,
  isHidden,
} from './Button.module.scss'
import cx from 'classnames'
import Icon from '@/components/UI/Icon'
import Loader from '@/components/UI/Loader'

export default function Button({
  children,
  onClick,
  inverted,
  icon = '',
  iconRight = '',
  isLoading = false,
  linkStyle,
  className = '',
  hidden,
  ...props
}) {
  return (
    <button
      className={cx(
        {
          [buttonWrapper]: true,
          [invertedWrapper]: inverted,
          [hasIcon]: !!icon || !!iconRight,
          [link]: !!linkStyle,
          [isHidden]: hidden,
        },
        className
      )}
      disabled={isLoading || props.disabled}
      onClick={onClick}
      {...props}
    >
      <>
        {icon && <Icon id={icon} />}
        {isLoading ? (
          <Loader light={!inverted} className={loaderWrapper} />
        ) : (
          children
        )}
        {iconRight && <Icon id={iconRight} />}
      </>
    </button>
  )
}
