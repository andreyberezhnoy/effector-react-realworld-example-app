import { createEffect, attach } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as profile from '../../../model';
import { types } from '../../../model';

export const getFeedFx = createEffect(
  ({ username, page }: types.GetFeedFxArgs) =>
    api.get<feed.types.Feed>(
      `/articles?author=${encodeURIComponent(username)}&${limit(5, page)}`,
    ),
);

export const PageGate = createGate();

export const {
  currentPageSetted,
  favoriteToggled,
  $currentPage,
  $articles,
  $isEmptyArticles,
  $totalPages,
  $feed: $myArticles,
} = feed.createFeedModel();

export const getMyArticlesFx = attach({
  source: { username: profile.model.$username, page: $currentPage },
  effect: getFeedFx,
});
