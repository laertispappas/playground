require "spec_helper"

RSpec.describe ADT::BST do
  let(:bst) { ADT::BST.new }

  describe "#size" do
    it { expect(bst.size).to eq 0 }

    it "returns the tree size for 1 node" do
      bst.put(:a, 1)

      expect(bst.size).to eq 1
    end

    it "returns the correct size for more than one elements" do
      bst.put :d, 1
      bst.put :c, 1
      bst.put :e, 1
      bst.put :f, 1

      expect(bst.size).to eq 4
    end
  end

  describe "#empty?" do
    it { expect(bst).to be_empty }

    it "is not empty when a node exists" do
      bst.put :a, 1
      expect(bst).to_not be_empty
    end
  end

  describe "#contains?" do
    it "is false when key is not found" do
      expect(bst.contains?(:a)).to be false
    end

    it "is true when the tree contains the key" do
      bst.put :a, 1
      expect(bst.contains?(:a)).to be true
    end
  end

  describe "#get" do
    it "returns nil when the value is not found" do
      expect(bst.get(:a)).to be nil
    end

    it "returns the value if it exists in the tree" do
      bst.put :a, 1
      expect(bst.get(:a)).to eq 1
    end
  end

  describe "#put" do
    it "puts the value to the tree following BST properties" do
      bst.put 10, 10
      bst.put 8, 8
      bst.put 4, 4
      bst.put 6, 6
      bst.put 12, 12
      bst.put 14, 14

      expect(bst.root.val).to eq 10
      expect(bst.root.left.val).to eq 8
      expect(bst.root.left.left.val).to eq 4
      expect(bst.root.left.left.right.val).to eq 6
      expect(bst.root.right.val).to eq 12
      expect(bst.root.right.right.val).to eq 14

      expect(bst.root.left.right).to be_nil
      expect(bst.root.left.left.left).to be_nil
      expect(bst.root.left.left.right.left).to be_nil
      expect(bst.root.left.left.right.right).to be_nil
    end
  end

  describe "#delete" do
    it "deletes the root node" do
      bst.put :a, 1
      bst.delete :a

      expect(bst).to be_empty
    end

    it "delete a left child of root" do
      bst.put :a, 10
      bst.put :b, 8
      expect(bst.contains?(:b)).to be true

      bst.delete :b
      expect(bst.contains?(:b)).to be false
    end

    it "delete a right child of root" do
      bst.put :a, 10
      bst.put :b, 12
      expect(bst.contains?(:b)).to be true

      bst.delete :b
      expect(bst.contains?(:b)).to be false
    end

    it "deletes a left node from > 2 level tree" do
      bst.put 10, 10
      bst.put 8, 8
      bst.put 6, 6
      bst.put 7, 7
      bst.put 3, 3
      bst.put 12, 12
      bst.put 14, 14
      bst.put 1, 112
      assert_bst!(bst)

      expect(bst.contains?(6)).to be true

      bst.delete 6
      expect(bst.contains?(6)).to be false

      assert_bst!(bst)
    end
  end

  describe "#delete_min" do
    it "deletes the a min node leaf" do
      bst.put 10, 10
      bst.put 8, 8
      bst.put 12, 12

      expect(bst.contains?(8)).to be true
      bst.delete_min
      expect(bst.contains?(8)).to_not be true
      assert_bst! bst

    end

    it "deletes a 1 node tree only" do
      bst.put 10, 10
      bst.delete_min
      expect(bst.contains?(10)).to be false
    end

    it "deletes a node with one right child" do
      bst.put 10, 10
      bst.put 8, 8
      bst.put 9, 9

      assert_bst! bst
      bst.delete_min
      expect(bst.contains?(8)).to be false
      assert_bst! bst
    end
  end

  describe "#delete_max" do
    it "deletea a a tree with one root node only" do
      bst.put 10, 10
      bst.delete_max

      expect(bst).to be_empty
    end

    it "deletes a max node form a tree" do
      bst.put 10, 10
      bst.put 6, 10
      bst.put 4, 10
      bst.put 12, 10
      bst.put 11, 10
      bst.put 14, 10

      bst.delete_max

      expect(bst.contains?(14)).to be false
      expect(bst.contains?(10)).to be true
      expect(bst.contains?(6)).to be true
      expect(bst.contains?(4)).to be true
      expect(bst.contains?(12)).to be true
      expect(bst.contains?(11)).to be true
    end
  end

  describe "#min" do
    it "returns the root when tree has one node" do
      bst.put 1, 1
      node = bst.min
      expect(node.key).to eq 1
      expect(node.val).to eq 1
    end

    it "returns the smallest node on more than one nodes" do
      bst.put 10, 10
      bst.put 8, 10
      bst.put 12, 10
      bst.put 1, 1

      node = bst.min
      expect(node.key).to eq 1
    end
  end
  
  describe "#max" do
    it "returns the root when tree has one node" do
      bst.put 1, 1
      node = bst.max
      expect(node.key).to eq 1
      expect(node.val).to eq 1
    end

    it "returns the largest node on more than one nodes" do
      bst.put 10, 10
      bst.put 8, 10
      bst.put 12, 10
      bst.put 1, 1

      node = bst.max
      expect(node.key).to eq 12
    end

  end

  def assert_bst!(tree)
    raise "not bst" unless bst?(tree)
  end

  def bst?(tree)
    def _bst?(node)
      return true if node.nil?

      return false if node.left && node.left.key > node.key
      return false if node.right && node.right.key < node.key

      _bst?(node.left) && _bst?(node.right)
    end

    _bst?(tree.root)
  end
end
