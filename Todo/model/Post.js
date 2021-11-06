// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { field, text, date } from '@nozbe/watermelondb/decorators'

export default class Post extends Model {
  static table = 'posts'
  static associations = {
    comments: { type: 'has_many', foreignKey: 'post_id' },
  }

  @text('title') title
  @text('body') body
  @field('is_pinned') isPinned
  @date('last_event_at') lastEventAt
  @date('archived_at') archivedAt
  
  get isRecentlyArchived() {
      // in the last 7 days
      return this.archivedAt &&
        this.archivedAt.getTime() > Date.now() - 7 * 24 * 3600 * 1000
    }
}

// class Post extends Model {
//     static table = 'posts'
//     static associations = {
//       comments: { type: 'has_many', foreignKey: 'post_id' },
//     }

//     @text('title') title
//     @text('body') body
//     @field('is_pinned') isPinned
//     @date('last_event_at') lastEventAt
//     @date('archived_at') archivedAt
    
//     get isRecentlyArchived() {
//         // in the last 7 days
//         return this.archivedAt &&
//           this.archivedAt.getTime() > Date.now() - 7 * 24 * 3600 * 1000
//       }
//   }
  
//   class Comment extends Model {
//     static table = 'comments'
//     static associations = {
//       posts: { type: 'belongs_to', key: 'post_id' },
//     }
//   }