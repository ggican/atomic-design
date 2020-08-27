import React from "react";

// begin local import
import AvatarStyle from "./index.style";
import Skeleton from "../skeleton";
// end local import

const AvatarLoading = () => {
    return (
        <AvatarStyle>
            <div className="avatar__header">
                <div className="avatar__header top">
                    <div className="avatar__header__avatar">
                        <Skeleton width="70px" height={70} circle></Skeleton>
                    </div>
                </div>
            </div>
        </AvatarStyle>
    );
};

export default AvatarLoading;
