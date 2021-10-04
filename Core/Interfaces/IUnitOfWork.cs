using System;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        iGenericRepository<TEntity> Repository<TEntity>() where TEntity: BaseEntity;
        Task<int> Complete();
    }
}