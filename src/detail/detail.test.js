import React from 'react';
import detail from './detail';

describe('ArticleList tests', () => {
    const article = {
        "name": "bmw-530",
        "type": "sedan",
        "price": "40000",
        "image": {
            "_url": "https://img5.autotimes.com.cn/news/2019/04/0426_142700657113.jpg",
            "_height": "619",
            "_width": "1100"
        },
    };
    it('renders correctly', () => {
        const { container } = render(<detail article={article} />);
        expect(container).toMatchSnapshot();
    });
});