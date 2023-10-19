import cx from 'classnames'

export default function Icon({ id, height, width, onClick, className }) {
  const isIconImg = /.svg$/.test(id)
  if (isIconImg) {
    return (
      <img
        src={id}
        height={height}
        width={width}
        data-icon={id}
        style={{ cursor: onClick ? 'pointer' : 'inherit' }}
        onClick={onClick}
      />
    )
  }
  return (
    <svg
      className={cx('icon', className)}
      height={height}
      width={width}
      data-icon={id}
      style={{ cursor: onClick ? 'pointer' : 'inherit' }}
      onClick={onClick}
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  )
}
