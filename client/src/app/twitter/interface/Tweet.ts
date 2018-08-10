export interface TweetUser {
  created_at: string,
  default_profile: boolean  | null,
  default_profile_image: false  | null,
  description: string  | null,
  favourites_count: number  | null,
  followers_count: number | null,
  friends_count: number  | null,
  lang: string  | null,
  location: string  | null,
  name: string  | null,
  profile_background_color: string  | null,
  profile_background_image_url: string  | null,
  profile_background_image_url_https: string  | null,
  profile_banner_url: string  | null,
  profile_image_url: string  | null,
  profile_image_url_https: string  | null,
  profile_sidebar_border_color: string  | null,
  profile_sidebar_fill_color: string  | null,
  profile_text_color: string  | null,
  profile_use_background_image: true  | null,
  screen_name: string  | null,
  statuses_count: number  | null
}




export interface Tweet {
  user: TweetUser,
  created_at: string  | null,
  favourite_count: number  | null,
  id_str: string  | null,
  retweet_count: number | null,
  full_text: string,
  entities: any | null,
  retweeted_status: {
    user: TweetUser,
    text: string,
    id_str: string,
    created_at: string,
    favourite_count: number  | null,
    retweet_count: number | null,
  } | null
}
