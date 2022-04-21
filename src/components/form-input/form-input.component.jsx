import './form-input.styles.scss';

const FromInput = ({label, ...otherProps}) => {
   return (
   <div className="group">
        <input className="form-input" {...otherProps} />
        {/* {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )} */}
        <label
          className='form-input-label'
        >
          {label}
        </label>
    </div>
   )
}

export default FromInput