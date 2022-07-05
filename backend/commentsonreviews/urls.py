from django.urls import path

from .views import GetCommentsFromUserId, PostCommentOnReview, DeleteCommentById

urlpatterns = [
    path('<int:user_id>/', GetCommentsFromUserId.as_view()),
    path('new/<int:review_id>/', PostCommentOnReview.as_view()),
    path('id/<int:pk>/', DeleteCommentById.as_view()),
    #path('new/<int:restaurantreview_id>/', CreateComment.as_view()),
    #path('<int:comment_id>/', DeleteComment.as_view()),
    #path('', ListReviewCommentedByUser.as_view())
]