// 104. 二叉树的最大深度
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) {
    return 0
  }
  return Math.max(
    maxDepth(root.left),
    maxDepth(root.right),
  ) + 1
};
