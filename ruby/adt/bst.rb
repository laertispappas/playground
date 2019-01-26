module ADT
  class Node
    attr_reader :key, :val, :size, :left, :right
    attr_accessor :size, :val, :left, :right
    def initialize(k, v, s = 1)
      @key, @val, @size = k, v, s
    end
  end
  # unbalanced BST implementation
  #
  class BST
    attr_reader :root
    def size
      return 0 if root.nil?

      root.size
    end

    def empty?
      size == 0
    end

    def contains?(key)
      raise ArgumentError if key.nil?
      !get(key).nil?
    end

    def get(key)
      raise ArgumentError if key.nil?

      def _loop(node, key)
        return if node.nil?
        if key < node.key
          _loop(node.left, key)
        elsif key > node.key
          _loop(node.right, key)
        else
          node.val
        end
      end

      _loop(root, key)
    end

    def put(k, v)
      raise ArgumentError if k.nil?

      if v.nil?
        return delete(k)
      end

      @root = _put_node(root, k, v)
    end

    def delete(k)
      raise ArgumentError if k.nil?

      @root = _delete(root, k)
    end

    def delete_min
      raise "Tree empty" if empty?

      @root = _delete_min(root)
    end

    def delete_max
      def _delete_max(node)
        return node.left if node.right.nil?

        node.right = _delete_max(node.right)
        node.size = 1 + node.left&.size.to_i + node.right&.size.to_i
        node
      end

      raise "Tree is empty" if root.nil?

      @root = _delete_max(root)
    end

    def min
      raise "Tree is empty" if empty?
      def _min(node)
        return node if node.left.nil?
        _min(node.left)
      end

      _min(root)
    end

    def max
      raise "tree is empty" if root.nil?

      def _max(node)
        return node if node.right.nil?
        _max(node.right)
      end

      _max(root)
    end

    private

    def _put_node(node, k, v)
      return Node.new(k, v) if node.nil?

      if k < node.key
        node.left = _put_node(node.left, k, v)
      elsif k > node.key
        node.right = _put_node(node.right, k, v)
      else
        node.val = v
      end

      node.size = 1 + node.left&.size.to_i + node.right&.size.to_i
      node
    end

    def _delete(node, k)
      return if node.nil?

      if k < node.key
        node.left = _delete(node.left, k)
      elsif k > node.key
        node.right = _delete(node.right, k)
      else
        return node.left if node.right.nil?
        return node.right if node.left.nil?

        temp = node
        node = _find_min(temp.right)
        node.right = _delete_min(temp.right)
        node.left = temp.left
      end

      node.size = 1 + node.left&.size.to_i + node.right&.size.to_i
      node
    end

    def _delete_min(node)
      return node.right if node.left.nil?
      node.left = _delete_min(node.left)
      node.size = 1 + node.left&.size.to_i + node.right&.size.to_i
      node
    end

    def _find_min(node)
      if (node.left.nil?)
        return node
      else
        return _find_min(node.left)
      end
    end

  end
end
