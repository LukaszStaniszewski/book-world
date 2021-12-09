import React from 'react'

import './loading-icon.styles.scss'


const LoadingIcon = WrappedComponent => { 
        const LoadScreen = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <div className="loading-overlay">
                <div className="loading-container"></div>
            </div>
        ) : (
            <WrappedComponent {...otherProps}/>
        );
    };
    return LoadScreen;
}
export default LoadingIcon;