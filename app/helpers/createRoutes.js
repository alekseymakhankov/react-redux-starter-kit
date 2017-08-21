import React from 'react';
import { Route } from 'react-router-dom';

const flattenRoutes = (baseRoutes, currentPath = '') => {
  return baseRoutes.reduce((result, route) => {
    const correctRoute = Object.assign({}, route, { path: `${currentPath}${route.path}` });
    result = result.concat([correctRoute]);
    if (route.childRoutes) {
      result = result.concat(flattenRoutes(correctRoute.childRoutes, correctRoute.path));
    }
    return result;
  }, []);
};

const createRoutes = (baseRoutes) => {
  return flattenRoutes(baseRoutes).map((route, index) => {
    return (
      <Route exact path={route.path} component={route.component} key={`route-index-${index}`} />
    );
  });
};

export { flattenRoutes };
export default createRoutes;
