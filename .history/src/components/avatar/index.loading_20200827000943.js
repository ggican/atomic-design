import React from "react";

// begin local import
import AvatarHeaderStyle from "./index.style";
import Skeleton from "../skeleton";
// end local import

const AvatarHeaderLoading = () => {
    return (
        <AvatarHeaderStyle>
            <div className="avatar__header">
                <div className="avatar__header__left">
                    <div className="avatar__header top">
                        <div className="avatar__header__avatar">
                            <Skeleton width="70px" height={70} circle></Skeleton>
                        </div>
                    </div>
                </div>
            </div>
        </AvatarHeaderStyle>
    );
};

export default AvatarHeaderLoading;
