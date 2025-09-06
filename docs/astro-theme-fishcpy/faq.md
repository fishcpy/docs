# ❓ 常见问题

本文档收集了使用 Astro Theme Fishcpy 过程中的常见问题和解决方案。

## 🚀 安装和启动问题

### Q: 安装依赖时出现错误
**A:** 请检查以下几点：

1. **Node.js 版本**
   ```bash
   node --version  # 应该 >= 20.0.0
   ```

2. **使用正确的包管理器**
   ```bash
   # 推荐使用 pnpm
   npm install -g pnpm
   pnpm install
   
   # 如果使用 npm
   npm install --legacy-peer-deps
   ```

3. **清理缓存**
   ```bash
   # pnpm
   pnpm store prune
   rm -rf node_modules
   pnpm install
   
   # npm
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

### Q: 开发服务器启动失败
**A:** 常见解决方案：

1. **端口被占用**
   ```bash
   # 使用不同端口
   pnpm dev --port 3000
   
   # 或者杀死占用进程
   lsof -ti:4321 | xargs kill -9
   ```

2. **权限问题**
   ```bash
   # macOS/Linux
   sudo pnpm dev
   
   # 或者更改端口到非特权端口
   pnpm dev --port 8080
   ```

3. **防火墙问题**
   ```bash
   # 允许本地访问
   pnpm dev --host 0.0.0.0
   ```


