import PropTypes from 'prop-types'

export const FristApp = ({title=''}) => {
    return (
        <>
        <h1>{ title }</h1>
        <p>Subtitle</p>
        </>
    )
}

FristApp.propTypes={
    title: PropTypes.string
}
