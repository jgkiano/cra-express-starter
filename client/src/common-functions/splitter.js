import React from "react";
import Loadable from "react-loadable";

const splitter = (loader, loading = null) => {
    return Loadable({
        loader,
        loading: loading ? loading : props => <span />
    });
};

export { splitter };
