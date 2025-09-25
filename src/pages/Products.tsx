import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListFilter as Filter, Grid2x2 as Grid, List, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { FilterOptions } from '../types';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterOptions>({
    category: searchParams.get('category') || '',
    priceRange: [0, 2000],
    sortBy: 'popularity',
    inStock: false
  });

  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange![0] && product.price <= filters.priceRange![1]
    );

    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default: // popularity
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return filtered;
  }, [searchQuery, filters]);

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'beans', label: 'Coffee Beans' },
    { value: 'machines', label: 'Machines' },
    { value: 'accessories', label: 'Accessories' }
  ];

  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="bg-beige py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-coffee-dark mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Products'}
            </h1>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              {searchQuery
                ? `Found ${filteredProducts.length} products matching your search`
                : 'Discover our complete collection of premium coffee products'
              }
            </p>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-coffee-dark">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-text-medium hover:text-coffee-dark"
                >
                  ×
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-coffee-dark mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-coffee-dark mb-2">
                  Price Range
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={filters.priceRange![1]}
                    onChange={(e) => setFilters({
                      ...filters,
                      priceRange: [filters.priceRange![0], parseInt(e.target.value)]
                    })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-text-medium">
                    <span>${filters.priceRange![0]}</span>
                    <span>${filters.priceRange![1]}</span>
                  </div>
                </div>
              </div>

              {/* In Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-sm text-coffee-dark">In Stock Only</span>
                </label>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({
                  category: '',
                  priceRange: [0, 2000],
                  sortBy: 'popularity',
                  inStock: false
                })}
                className="w-full btn-outline"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden btn-outline"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-text-medium">
                  {filteredProducts.length} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                  className="min-w-[180px]"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* View Mode */}
                <div className="flex border border-border-light rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-coffee-dark text-white' : 'bg-white text-text-medium hover:bg-beige'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-coffee-dark text-white' : 'bg-white text-text-medium hover:bg-beige'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">☕</div>
                <h3 className="text-2xl font-semibold text-coffee-dark mb-2">
                  No products found
                </h3>
                <p className="text-text-medium mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      category: '',
                      priceRange: [0, 2000],
                      sortBy: 'popularity',
                      inStock: false
                    });
                    window.history.replaceState({}, '', '/products');
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;