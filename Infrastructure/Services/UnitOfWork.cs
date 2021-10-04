using System;
using System.Collections;
using System.Threading.Tasks;
using Core;
using Core.Interfaces;
using Infrastructure.Data;

namespace Infrastructure.Services {
    public class UnitOfWork : IUnitOfWork {
        private readonly StoreContext _context;
        private Hashtable _repositories;
        public UnitOfWork (StoreContext context) {
            _context = context;
        }

        public async Task<int> Complete () {
            return await _context.SaveChangesAsync();
        }

        public void Dispose () {
           _context.Dispose();
        }

        public iGenericRepository<TEntity> Repository<TEntity> () where TEntity : BaseEntity {
            if(_repositories == null) _repositories = new Hashtable();

            var type = typeof(TEntity).Name;

            if(!_repositories.ContainsKey(type))
            {
                var repositoryType = typeof(GenericRepository<>);

                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), _context);

                _repositories.Add(type, repositoryInstance);
            }

            return (iGenericRepository<TEntity>) _repositories[type];
        }
    }
}