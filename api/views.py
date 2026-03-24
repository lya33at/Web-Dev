from django.http import JsonResponse
from .models import Product, Category

def products_list(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def product_detail(request, id):
    product = list(Product.objects.filter(id=id).values())
    return JsonResponse(product, safe=False)

def categories_list(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories, safe=False)

def category_detail(request, id):
    category = list(Category.objects.filter(id=id).values())
    return JsonResponse(category, safe=False)

def products_by_category(request, id):
    products = list(Product.objects.filter(category_id=id).values())
    return JsonResponse(products, safe=False)