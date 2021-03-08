import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import ArticleList from "./ArticleList/ArticleList.jsx";
import { isEmpty } from "lodash";
function App() {
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        //add code here
        const fetchData = async () => {
            const response = await fetch(
                "http://demo1390455.mockable.io/articles"
            );
            const responseJson = await response.json();
            setFetchedData(responseJson);
        };

        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);

    return isEmpty(fetchedData) ? null : (
        <div className="App">
            <Switch>
                <Route exact path="/articlelist">
                    <ArticleList articleList={Object.values(fetchedData)} />
                </Route>
                <Route path="/articlelist/:slug" render={({ match }) => <DynamicArticle article={fetchedData[match.params.slug]} />} />
            </Switch>
        </div>
    );
}

export default App;