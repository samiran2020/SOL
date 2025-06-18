import { Page } from '../types/types';

const Custom404: Page = () => {
    return <div>Page Not Found</div>;
};

Custom404.getLayout = function getLayout(page) {
    return page;
};

export default Custom404;
