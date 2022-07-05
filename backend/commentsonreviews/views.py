
from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView, RetrieveDestroyAPIView, \
    ListCreateAPIView

from rest_framework.response import Response


from restaurantreviews.models import Restaurantreview
from .models import Comment
from .serializers import CommentSerializer

# list all comments from user
class GetCommentsFromUserId(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'user_id'

    def get_queryset(self, **kwargs):
        queryset = Comment.objects.filter(
            commented_by_id=self.kwargs['user_id'])
        return queryset




# comment on review
class PostCommentOnReview(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def post(self, request, review_id, **kwargs):
        queryset_restaurantreview = Restaurantreview.objects.get(id=review_id)
        comment = Comment(commented_by=request.user, commented_restaurantreview=queryset_restaurantreview, text_content=request.data['text_content'])
        comment.save()
        return Response(status=200)


# delete comment by id
class DeleteCommentById(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []



