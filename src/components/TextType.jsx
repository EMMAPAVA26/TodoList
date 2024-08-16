import PropTypes from 'prop-types';

export const TextType = ({className,tagName:TagName='p',textContent, children, ...props}) => {
    return (
        
        <TagName className={className} {...props} >
          
          {textContent || children}
        
        </TagName>
       


    )
}

TextType.propTypes ={
    tagName: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']).isRequired,
    className:PropTypes.string,
    textContent:PropTypes.string,
    children:PropTypes.node,

}

